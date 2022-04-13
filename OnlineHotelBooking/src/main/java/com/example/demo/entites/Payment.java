package com.example.demo.entites;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="payment")
public class Payment
{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int paymentid;
	@Column
	String paymentmode;
	@Column
	String bookingid;
	@Column
	int uid;
	@Column
	String cardno;
	@Column
	String cvv;
	@Column
	String expiry;
	public Payment() {
		super();
	}
	public Payment(int paymentid, String paymentmode, String bookingid, int uid, String cardno, String cvv,
			String expiry) {
		super();
		this.paymentid = paymentid;
		this.paymentmode = paymentmode;
		this.bookingid = bookingid;
		this.uid = uid;
		this.cardno = cardno;
		this.cvv = cvv;
		this.expiry = expiry;
	}
	public int getPaymentid() {
		return paymentid;
	}
	public void setPaymentid(int paymentid) {
		this.paymentid = paymentid;
	}
	public String getPaymentmode() {
		return paymentmode;
	}
	public void setPaymentmode(String paymentmode) {
		this.paymentmode = paymentmode;
	}
	public String getBookingid() {
		return bookingid;
	}
	public void setBookingid(String bookingid) {
		this.bookingid = bookingid;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getCardno() {
		return cardno;
	}
	public void setCardno(String cardno) {
		this.cardno = cardno;
	}
	public String getCvv() {
		return cvv;
	}
	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
	public String getExpiry() {
		return expiry;
	}
	public void setExpiry(String expiry) {
		this.expiry = expiry;
	}
	@Override
	public String toString() {
		return "Payment [paymentid=" + paymentid + ", paymentmode=" + paymentmode + ", bookingid=" + bookingid
				+ ", uid=" + uid + ", cardno=" + cardno + ", cvv=" + cvv + ", expiry=" + expiry + "]";
	}
	
	
}
