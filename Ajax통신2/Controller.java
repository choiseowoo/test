package com.oriental.AjaxTest.controller;

import java.util.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class AjaxTestController {
	
	@GetMapping("/getAgeByName")
    /* inputName 파라미터를 받아, 미리 저장된 ageMap에서 해당 이름에 맵핑된 나이를 리턴해주는 메소드 */
	public Map<String,Object> getAgeByName( @RequestParam String inputName ) {
		Map<String, Integer> ageMap = new HashMap<>();
		ageMap.put("tom", 10); ageMap.put("bob", 20); ageMap.put("kim", 30);
		
		Map<String,Object> returnMap = new HashMap<>();
		returnMap.put("name", inputName);
		returnMap.put("age", ageMap.get(inputName));
		
		return returnMap;
	}
}
