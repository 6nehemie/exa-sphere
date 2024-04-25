package _6nehemie.com.server.controller;

import _6nehemie.com.server.dto.generate.GenerateResponseDto;
import _6nehemie.com.server.dto.generate.GetGenerateResponseDto;
import _6nehemie.com.server.dto.generate.PostGenerateDto;
import _6nehemie.com.server.dto.generate.PutGenerateDto;
import _6nehemie.com.server.exception.NotFoundException;
import _6nehemie.com.server.model.Generate;
import _6nehemie.com.server.model.User;
import _6nehemie.com.server.repository.UserRepository;
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

    @PostMapping
    public ResponseEntity<GetGenerateResponseDto> createGenerate(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody @Validated PostGenerateDto request
    ) {
        return ResponseEntity.ok(generateService.createGenerate(userDetails, request));
    }

    @GetMapping
    public ResponseEntity<List<GetGenerateResponseDto>> getAllGenerates(
            @AuthenticationPrincipal UserDetails userDetails
    ) {
        return ResponseEntity.ok(generateService.getAllGenerates(userDetails));
    }

    @GetMapping("/{id}")
    public ResponseEntity<GetGenerateResponseDto> getGenerateById(
            @AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id
    ) {
        return ResponseEntity.ok(generateService.getGenerateById(userDetails, id));
    }

    // put mapping //? update cover letter
    @PutMapping
    public ResponseEntity<GenerateResponseDto> updateCoverLetter(
            @AuthenticationPrincipal UserDetails userDetails, @RequestBody @Validated PutGenerateDto request
    ) {
        return ResponseEntity.ok(generateService.updateCoverLetter(userDetails, request));
    }

    // delete mapping //? delete generate
    @DeleteMapping("/{id}")
    public ResponseEntity<GenerateResponseDto> deleteGenerate(
            @AuthenticationPrincipal UserDetails userDetails, @PathVariable Long id
    ) {
        return ResponseEntity.ok(generateService.deleteGenerate(userDetails, id));
    }
}
