package com.example.demo.entites;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="hotel")
public class Hotel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int hotelid;

	@Column
	int hotelregno;
	
	@Column
	String hname;
	
	@Column
	String address;
	
	@Column
	String email;
	
	@Column
	double contact_no;
	
	/*@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image1;
	
	@Lob
	@Column(columnDefinition = "MEDIUMBLOB")
	private String image2;*/
	
	@Column
	int ac_room;
	
	@Column
	int non_ac_room;
	
	@Column
	int uid;
	
	@Column
	String cityname;
	
	/*@JsonIgnoreProperties("hotel")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="cityid")
	City cityid;*/
	

	/*@JsonIgnoreProperties("hotel")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="uid")
	User uid;*/


	public Hotel() {
		super();
	}





	





	public Hotel(int hotelid, int hotelregno, String hname, String address, String email, double contact_no,
			int ac_room, int non_ac_room, int uid, String cityname) {
		super();
		this.hotelid = hotelid;
		this.hotelregno = hotelregno;
		this.hname = hname;
		this.address = address;
		this.email = email;
		this.contact_no = contact_no;
		this.ac_room = ac_room;
		this.non_ac_room = non_ac_room;
		this.uid = uid;
		this.cityname = cityname;
	}





	public int getHotelid() {
		return hotelid;
	}


	public void setHotelid(int hotelid) {
		this.hotelid = hotelid;
	}


	public int getHotelregno() {
		return hotelregno;
	}


	public void setHotelregno(int hotelregno) {
		this.hotelregno = hotelregno;
	}


	public String getHname() {
		return hname;
	}


	public void setHname(String hname) {
		this.hname = hname;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public double getContact_no() {
		return contact_no;
	}


	public void setContact_no(double contact_no) {
		this.contact_no = contact_no;
	}


	public int getAc_room() {
		return ac_room;
	}


	public void setAc_room(int ac_room) {
		this.ac_room = ac_room;
	}


	public int getNon_ac_room() {
		return non_ac_room;
	}


	public void setNon_ac_room(int non_ac_room) {
		this.non_ac_room = non_ac_room;
	}


	


	public String getCityname() {
		return cityname;
	}





	public void setCityname(String cityname) {
		this.cityname = cityname;
	}





	/*public User getUid() {
		return uid;
	}


	public void setUid(User uid) {
		this.uid = uid;
	}
*/

	public int getUid() {
		return uid;
	}











	public void setUid(int uid) {
		this.uid = uid;
	}











	@Override
	public String toString() {
		return "Hotel [hotelid=" + hotelid + ", hotelregno=" + hotelregno + ", hname=" + hname + ", address=" + address
				+ ", email=" + email + ", contact_no=" + contact_no + ", ac_room=" + ac_room + ", non_ac_room="
				+ non_ac_room + ", uid=" + uid + ", cityname=" + cityname + "]";
	}











	
	
	
	
	
	
	
	
	
	
}
