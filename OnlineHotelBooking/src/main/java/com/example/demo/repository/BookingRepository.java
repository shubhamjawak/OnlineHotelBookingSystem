package com.example.demo.repository;

import java.time.LocalDate;
import java.util.Date;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.Booking;

@Transactional
@Repository
public interface BookingRepository extends JpaRepository<Booking, Integer> {



	@Modifying(clearAutomatically=true)
	@Query(value="insert into Booking(bookingdate,checkin,checkout,no_of_rooms,status,rid,uid,totalcost) values (?1,?2,?3,?4,?5,?6,?7,?8)",nativeQuery=true)
	public int BookingBy(LocalDate bookingdate, Date checkin, Date checkout, int no_of_rooms, String status, int rid, int uid,
			double totalcost );

	@Query(value="select bookingid from Booking ORDER BY bookingid DESC LIMIT 1",nativeQuery=true)
	public int getbookingid();

	@Query(value="select totalcost from Booking where bookingid= :bookingid",nativeQuery=true)
	public int getcost(int bookingid);

}
