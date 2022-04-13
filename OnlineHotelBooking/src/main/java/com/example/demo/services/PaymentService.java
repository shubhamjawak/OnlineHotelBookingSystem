package com.example.demo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entites.Payment;
import com.example.demo.repository.PaymentRepository;
import com.example.demo.repository.UserRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository prepo;
	
	public Payment save(Payment p) {
		// TODO Auto-generated method stub
		return prepo.save(p);
	}

	public List<Payment> getPayment() {
		// TODO Auto-generated method stub
		return prepo.findAll();
	}

}
