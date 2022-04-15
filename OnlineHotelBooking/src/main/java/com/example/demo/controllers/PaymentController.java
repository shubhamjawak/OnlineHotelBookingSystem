package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.Payment;
import com.example.demo.entites.User;
import com.example.demo.services.PaymentService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController
{

	@Autowired
	PaymentService pservice;

	
	@GetMapping("/getpayment")
	public List<Payment> getAll()
	{
		return pservice.getPayment();
	}
	
	@PostMapping("/payment")
	public Payment save(@RequestBody Payment p)
	{
		System.out.println(p);
		
		return pservice.save(p);
	}
}
