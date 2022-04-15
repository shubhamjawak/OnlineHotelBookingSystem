package com.example.demo.controllers;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.demo.entites.Hotel;
import com.example.demo.entites.Room;
import com.example.demo.entites.User;
import com.example.demo.services.RoomService;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class RoomController {

	@Autowired
	RoomService rservice;
	
	@GetMapping("/getroom")
	public List<Room> getAll()
	{
		return rservice.getRoom();
	}
	
	@PostMapping("/checkroom")
	public List<Room> getroombyid(@RequestParam(value="hotelid") int hotelid)
	{
		return rservice.getRoomByid(hotelid);
	}
	
	@PostMapping("/addroom")
	public int addroom(@RequestBody Room r,@RequestParam(value="hotelid") int hotelid)
	{
		System.out.println(r);
		return rservice.addRoom(r,hotelid);
	}
	
	@PostMapping("/roomimages")
	public int saveAndUpload(@RequestParam(value = "roomtype", required = false) String roomtype,@RequestParam(value = "rateperday", required = false) double rateperday,@RequestParam(value = "hotelid", required = false) int hotelid,@RequestPart("file") MultipartFile file)
	{
		
	//Hotel hotelid=uservice.findById(hotelid)
		rservice.addroom(roomtype,rateperday, hotelid);
		System.out.println(" "+roomtype+" "+rateperday+" "+hotelid);
	boolean flag =true;
	try
	{
	byte [] data = file.getBytes();
	
	Path path=Paths.get("D:\\WPT\\ReactJs\\firstreactapp\\src\\components\\hotelfrontend\\images//"+hotelid+"-1.jpg");
	
	System.out.println(path);
	Files.write(path,data);
	}
	catch(Exception e)
	{
		flag=false;
	}
	if(flag)
		return 1;
	else return 0;
	}
}
