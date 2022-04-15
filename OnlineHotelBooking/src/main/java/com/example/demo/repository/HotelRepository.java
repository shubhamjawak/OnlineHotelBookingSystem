package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.Hotel;


@Transactional
@Repository
public interface HotelRepository extends JpaRepository<Hotel, Integer> {

	
	@Query("select h from Hotel h where uid= :uid")
	public List<Hotel> getByuid(int uid);

	@Modifying
	@Query("delete from Hotel where hotelid= :hotelid")
	public int deletehotelbyhid(int hotelid);
}
