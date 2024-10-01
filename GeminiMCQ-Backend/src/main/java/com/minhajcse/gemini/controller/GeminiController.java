package com.minhajcse.gemini.controller;

import com.minhajcse.gemini.service.GeminiService;
import com.minhajcse.model.Question;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class GeminiController {
    private final GeminiService geminiService;
    public GeminiController(GeminiService geminiService) {
        this.geminiService = geminiService;
    }

    @PostMapping("/query")
    public List<Question> query(@RequestBody String topic) throws IOException {
        String query = "Generate 10 multiple-choice questions about " + topic
                + " in the following JSON format:\n"
                + "{ \"question\": \"<question_text>\",  \"optionA\": \"<1st option>\", \"optionB\": \"<2nd option>\", \"optionC\": \"<3rd option>\", \"optionD\": \"<4th option>\", \"answer\": <index_of_correct_answer> }";

        String response = geminiService.getAiResponse(query);
        return geminiService.parseMcqResponse(response);
    }
}
