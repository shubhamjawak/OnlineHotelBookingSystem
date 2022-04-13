package com.example.demo.entites;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="user")
public class User 
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int uid;
	@Column
	String fname;
	@Column
	String lname;
	@Column
	String email;
	@Column
	String password;
	@Column
	String contact_no;
	@Column
	String aadhar_no;
	@Column
	String address;
	@Column
	String usertype;
	
	
	/*@JsonIgnoreProperties("user")
	@OneToMany(mappedBy = "user",cascade = CascadeType.ALL)
	Set<Hotel> hotel;*/
	
	public User() {
		super();
	}
	
	




	public User(int uid, String fname, String lname, String email, String password, String contact_no, String aadhar_no,
			String address, String usertype) {
		super();
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.password = password;
		this.contact_no = contact_no;
		this.aadhar_no = aadhar_no;
		this.address = address;
		this.usertype = usertype;
	}


	
	








	public int getUid() {
		return uid;
	}



	public void setUid(int uid) {
		this.uid = uid;
	}



	public String getFname() {
		return fname;
	}



	public void setFname(String fname) {
		this.fname = fname;
	}



	public String getLname() {
		return lname;
	}



	public void setLname(String lname) {
		this.lname = lname;
	}



	public String getEmail() {
		return email;
	}



	public void setEmail(String email) {
		this.email = email;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getContact_no() {
		return contact_no;
	}



	public void setContact_no(String contact_no) {
		this.contact_no = contact_no;
	}



	public String getAadhar_no() {
		return aadhar_no;
	}



	public void setAadhar_no(String aadhar_no) {
		this.aadhar_no = aadhar_no;
	}



	public String getAddress() {
		return address;
	}



	public void setAddress(String address) {
		this.address = address;
	}



	public String getUsertype() {
		return usertype;
	}



	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}


	

/*	public Set<Hotel> getHotel() {
		return hotel;
	}






	public void setHotel(Set<Hotel> hotel) {
		this.hotel = hotel;
	}


*/



	@Override
	public String toString() {
		return "User [uid=" + uid + ", fname=" + fname + ", lname=" + lname + ", email=" + email + ", password="
				+ password + ", contact_no=" + contact_no + ", aadhar_no=" + aadhar_no + ", address=" + address
				+ ", usertype=" + usertype + "]";
	}







	
	
	
}
