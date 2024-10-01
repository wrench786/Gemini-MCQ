package com.minhajcse.gemini.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.minhajcse.model.Question;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class GeminiService {
    @Value("${gemini.api.url}")
    private String apiUrl;

    private final RestTemplate restTemplate;
    public GeminiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public String getAiResponse(String query){
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> text = new HashMap<>();
        text.put("text", query);

        Map<String, Object> parts = new HashMap<>();
        parts.put("parts", new Object[]{text});

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("contents", new Object[]{parts});

        HttpEntity<Map<String,Object>> request = new HttpEntity<>(requestBody, headers);

        ResponseEntity<String> response = restTemplate.exchange(apiUrl, HttpMethod.POST, request, String.class);

        return response.getBody();
    }

    public List<Question> parseMcqResponse(String geminiResponse) throws IOException {
        List<Question> questions = new ArrayList<>();

        ObjectMapper objectMapper = new ObjectMapper();
        JsonNode rootNode = objectMapper.readTree(geminiResponse);

        JsonNode candidates = rootNode.path("candidates").get(0);

        JsonNode parts = candidates.path("content").path("parts");

        String content = parts.get(0).path("text").asText();
        String extractedContent = content.substring(8,(content.length()-4));

        JsonNode mcqArray = objectMapper.readTree(extractedContent);

        for(JsonNode mcq : mcqArray){
            Question question = new Question();

            question.setQuestion(mcq.path("question").asText());
            question.setOptionA(mcq.path("optionA").asText());
            question.setOptionB(mcq.path("optionB").asText());
            question.setOptionC(mcq.path("optionC").asText());
            question.setOptionD(mcq.path("optionD").asText());
            question.setAns(mcq.path("answer").asLong());

            questions.add(question);
        }

        return questions;
    }
}






