package com.example.demo.repository;



import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.City;
import com.example.demo.entites.Hotel;
import com.example.demo.entites.User;


@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u where email= :email")
	public User checKLogin(String email);

	
	/*@Modifying	
	@Query(value="insert into (hname,hotelregno,address,email,contact_no,ac_room,non_ac_room,uid) Hotel values (:hname,:hotelregno,:address,:email,:contact_no,:ac_room,:non_ac_room,:uid)",nativeQuery = true)
	public int addHotel(String hname, int hotelregno, String address, String email, double contact_no,
			int ac_room, int non_ac_room, int uid);*/
	
	@Modifying
	@Query(value="insert into Hotel(hname,hotelregno,address,email,contact_no,ac_room,non_ac_room,uid,cityname) values (?1,?2,?3,?4,?5,?6,?7,?8,?9)",nativeQuery=true)
	public int addHotel(String hname, int hotelregno, String address, String email, double contact_no,
			int ac_room, int non_ac_room, int uid,String cityname);


	@Query("select h from Hotel h where cityname= :cityname")
	public List<Hotel> searchHotelByCity(String cityname);


	@Modifying(clearAutomatically = true)
	@Query("Update User SET fname = :fname, lname = :lname, email = :email, password = :password, aadhar_no = :aadhar_no, contact_no = :contact_no, address = :address WHERE uid = :uid")
	public int updateById(int uid, String fname, String lname, String email, String password, String aadhar_no,
			String contact_no, String address);


	@Modifying
	@Query("delete from User where uid= :uid")
	public int deleteuserbyuid(int uid);


	@Query(value="select hotelid from Hotel ORDER BY hotelid DESC LIMIT 1",nativeQuery=true)
	public int getlasthid();


	

	

	
	
	
}
