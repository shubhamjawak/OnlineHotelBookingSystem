package com.example.demo.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entites.Hotel;
import com.example.demo.entites.User;
import com.example.demo.services.HotelService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class HotelController 
{
	@Autowired
	HotelService hservice;
	
	
	@GetMapping("/gethotels")
	public List<Hotel> getHotels()
	{
		
		return hservice.getHotels();
	}
	
	@PostMapping("/viewhotel")
	public Hotel getByid(@RequestParam(value="hotelid") int hotelid)
	{
		
		return hservice.getByid(hotelid);
	}
	
	@GetMapping("/gethotelbyid")
	public List<Hotel> getByuid(@RequestParam(value="uid") int uid)
	{
		
		return hservice.getByuid(uid);
	}
	
	@GetMapping("/deletehotelbyhid")
	public int deletehotelbyhid(@RequestParam(value="hotelid") int hotelid)
	{
		
		return hservice.deletehotelbyhid(hotelid);
	}

}
