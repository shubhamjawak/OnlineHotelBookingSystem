package com.example.demo.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.entites.Room;

@Transactional
@Repository
public interface RoomRepository extends JpaRepository<Room, Integer> {

	
	@Query("select r from Room r where hotelid= :hotelid")
	List<Room> getByid(int hotelid);

	@Modifying
	@Query(value="insert into Room(rateperday,roomtype,hotelid) values (?1,?2,?3)",nativeQuery=true)
	int addRoomById(double rateperday, String roomtype, int hotelid);

	@Modifying
	@Query(value="insert into Room(roomtype,rateperday,hotelid) values (?1,?2,?3)",nativeQuery=true)
	void addroom(String roomtype, double rateperday, int hotelid);

}
