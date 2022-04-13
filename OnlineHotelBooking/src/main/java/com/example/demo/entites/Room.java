package com.example.demo.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Room 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int rid;
	
	@Column
	String roomtype;
	
	@Column
	double rateperday;
	
	@Column
	int hotelid;

	public Room() {
		super();
	}

	public Room(int rid, String roomtype, double rateperday, int hotelid) {
		super();
		this.rid = rid;
		this.roomtype = roomtype;
		this.rateperday = rateperday;
		this.hotelid = hotelid;
	}

	public int getRid() {
		return rid;
	}

	public void setRid(int rid) {
		this.rid = rid;
	}

	public String getRoomtype() {
		return roomtype;
	}

	public void setRoomtype(String roomtype) {
		this.roomtype = roomtype;
	}

	public double getRateperday() {
		return rateperday;
	}

	public void setRateperday(double rateperday) {
		this.rateperday = rateperday;
	}

	public int getHotelid() {
		return hotelid;
	}

	public void setHotelid(int hotelid) {
		this.hotelid = hotelid;
	}

	@Override
	public String toString() {
		return "Room [rid=" + rid + ", roomtype=" + roomtype + ", rateperday=" + rateperday + ", hotelid=" + hotelid
				+ "]";
	}
	
	
}
