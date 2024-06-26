package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.generate.GenerateResponseDto;
import _6nehemie.com.server.dto.generate.GetGenerateResponseDto;
import _6nehemie.com.server.dto.generate.PostGenerateDto;
import _6nehemie.com.server.dto.generate.PutGenerateDto;
import _6nehemie.com.server.service.GenerateService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/generates")
public class GenerateController {

    private final GenerateService generateService;

    public GenerateController(GenerateService generateService) {
        this.generateService = generateService;
    }

    /**
     * Post mapping to create generate
     *
     * @param userDetails the user authentication details
     * @param request     the request body
     * @return the response entity
     */
    @PostMapping
    public ResponseEntity<GetGenerateResponseDto> createGenerate(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody @Validated PostGenerateDto request
    ) {
        return ResponseEntity.ok(generateService.createGenerate(userDetails, request));
    }

    /**
     * Get mapping to get all generates
     *
     * @param userDetails the user authentication details
     * @return the list of generated cover letters
     */
    @GetMapping
    public ResponseEntity<List<GetGenerateResponseDto>> getAllGenerates(
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(generateService.getAllGenerates(userDetails));
    }

    /**
     * Get mapping to get generate by id
     *
     * @param userDetails the user authentication details
     * @param id          the generate id
     * @return the generated cover letter
     */
    @GetMapping("/{id}")
    public ResponseEntity<GetGenerateResponseDto> getGenerateById(
            @AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id
    ) {
        return ResponseEntity.ok(generateService.getGenerateById(userDetails, id));
    }

    /**
     * Put mapping to update generate
     *
     * @param userDetails the user authentication details
     * @param request     the request body
     * @return the response entity
     */
    @PutMapping
    public ResponseEntity<GenerateResponseDto> updateCoverLetter(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody @Validated PutGenerateDto request
    ) {
        return ResponseEntity.ok(generateService.updateCoverLetter(userDetails, request));
    }

    /**
     * Delete mapping to delete generate
     *
     * @param userDetails the user authentication details
     * @param id          the generate id
     * @return 
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateResponseDto> deleteGenerate(
            @AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id
    ) {
        return ResponseEntity.ok(generateService.deleteGenerate(userDetails, id));
    }
}
