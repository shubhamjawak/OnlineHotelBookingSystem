package com.example.demo.entites;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="booking")
public class Booking {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int bookingid;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date bookingdate;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date checkin;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date checkout;
	
	@Column
	int no_of_rooms;
	
	@Column
	String status;
	
	@Column
	int rid;
	
	@Column
	int uid;
	
	@Column
	double totalcost;
	
	


	public Booking() {
		super();
	}

	

	



	public Booking(int bookingid, Date bookingdate, Date checkin, Date checkout, int no_of_rooms, String status,
			int rid, int uid, double totalcost) {
		super();
		this.bookingid = bookingid;
		this.bookingdate = bookingdate;
		this.checkin = checkin;
		this.checkout = checkout;
		this.no_of_rooms = no_of_rooms;
		this.status = status;
		this.rid = rid;
		this.uid = uid;
		this.totalcost = totalcost;
	}







	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public Date getBookingdate() {
		return bookingdate;
	}

	public void setBookingdate(Date bookingdate) {
		this.bookingdate = bookingdate;
	}

	public Date getCheckin() {
		return checkin;
	}

	public void setCheckin(Date checkin) {
		this.checkin = checkin;
	}

	public Date getCheckout() {
		return checkout;
	}

	public void setCheckout(Date checkout) {
		this.checkout = checkout;
	}

	public int getNo_of_rooms() {
		return no_of_rooms;
	}

	public void setNo_of_rooms(int no_of_rooms) {
		this.no_of_rooms = no_of_rooms;
	}
	
	

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
	
	

	public int getRid() {
		return rid;
	}



	public void setRid(int rid) {
		this.rid = rid;
	}



	public int getUid() {
		return uid;
	}



	public void setUid(int uid) {
		this.uid = uid;
	}

	


	public double getTotalcost() {
		return totalcost;
	}







	public void setTotalcost(double totalcost) {
		this.totalcost = totalcost;
	}







	@Override
	public String toString() {
		return "Booking [bookingid=" + bookingid + ", bookingdate=" + bookingdate + ", checkin=" + checkin
				+ ", checkout=" + checkout + ", no_of_rooms=" + no_of_rooms + ", status=" + status + ", rid=" + rid
				+ ", uid=" + uid + ", totalcost=" + totalcost + "]";
	}







	


	

	
	
	
}
