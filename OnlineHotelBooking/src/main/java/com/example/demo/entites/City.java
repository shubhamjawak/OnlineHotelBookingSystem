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
@Table(name="city")
public class City 
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int cityid;
	
	@Column
	String cityname;
	/*
	@JsonIgnoreProperties("city")
	@OneToMany(mappedBy = "city",cascade = CascadeType.ALL)
	Set<Hotel> hotel;

	public City() {
		super();
	}

	public City(int cityid, String cityname) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
	}
	
	

	public City(int cityid, String cityname, Set<Hotel> hotel) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
		this.hotel = hotel;
	}

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	
	public Set<Hotel> getHotel() {
		return hotel;
	}

	public void setHotel(Set<Hotel> hotel) {
		this.hotel = hotel;
	}

	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", cityname=" + cityname + ", hotel=" + hotel + "]";
	}
*/
	
	
	

}
