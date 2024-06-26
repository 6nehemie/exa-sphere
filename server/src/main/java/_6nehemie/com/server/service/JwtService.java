package _6nehemie.com.server.service;

import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.TokenRepository;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;
import java.util.function.Function;

@Service
public class JwtService {


    @Value("${jwt.secret}")
    private String SECRET_KEY;
    private final TokenRepository tokenRepository;
    
    public JwtService(TokenRepository tokenRepository) {
        this.tokenRepository = tokenRepository;
    }

    /**
     * Extract the username from the token
     * @param token - the token to extract the username from
     * @return - the username extracted from the token
     */
    public String extractUsername(String token) {

        // extract username from the token
        return extractClaim(token, Claims::getSubject);
    }

    /**
     * Check if the token is valid
     * @param token - the token to check
     * @param user - the user to check the token against
     * @return - true if the token is valid, false otherwise
     */
    public boolean isValid(String token, UserDetails user) {
        String username = extractUsername(token);

        boolean isValidToken = tokenRepository.findByToken(token)
                .map(token1 -> token1.isValid())
                .orElse(false);

        return (username.equals(user.getUsername()) && !isTokenExpired(token) && isValidToken);
    }

    /**
     * Check if the token is expired
     * @param token - the token to check
     * @return - true if the token is expired, false otherwise
     */
    private boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

    /**
     * Extract the expiration date from the token
     * @param token - the token to extract the expiration date from
     * @return - the expiration date extracted from the token
     */
    public Date extractExpiration(String token) {
        return extractClaim(token, Claims::getExpiration);
    }

    /**
     * Extract a claim from the token
     * @param token - the token to extract the claim from
     * @param resolver - the resolver to extract the claim
     * @param <T> - the type of the claim
     * @return - the claim extracted from the token
     */
    public <T> T extractClaim(String token, Function<Claims, T> resolver) {
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }

    /**
     * Extract all claims from the token
     * @param token - the token to extract the claims from
     * @return - the claims extracted from the token
     */
    private Claims extractAllClaims(String token) {

        // ? Will extract all information from the token such as username or expiration time
        return Jwts
                .parser()
                .verifyWith(getSingInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();
    }

    /**
     * Generate a token for the user
     * @param user - the user to generate the token for
     * @return - the generated token
     */
    public String generateToken(User user) {
        String token = Jwts.builder()
                .setSubject(user.getUsername())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60 * 10))
                .signWith(getSingInKey())
                .compact();

        return token;
    }

    /**
     * Get the signing key
     * @return - the signing key
     */
    private SecretKey getSingInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
