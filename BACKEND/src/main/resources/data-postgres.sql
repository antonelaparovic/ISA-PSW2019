insert into diagnose (id, title, description) values (100, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (101, 'Nikola', 'Nikolic');
insert into clinic(id, address, description, name,clinic_rating) values (100, 'Novi sad 123', 'Odlicna', 'MediaGroup',4.4);
insert into clinic(id,address,description,name,clinic_rating) values (101,'Sabac 2','Super','Dom zdravlja',3.4);
insert into examination_type(id, label, price, clinic_id) values (100,'Hirurg', '1000', 100);
insert into examination_type(id, label, price, clinic_id) values (1,'Hirurger', '1000', 100);
insert into users(id, email, password, role) values (100,'patient@email.com', 'Patient123',0);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (87, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patient@email.com', 'Patient', 147258589, 'Patient123', 'APPROVED', 'Patientic');
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (150, 1111111111112, 'Adreea', 'Grade', 'Drzava', 'patient2@email.com', 'Patienter', 147258581, 'Patient123', 'APPROVED', 'Patienticer');
insert into users(id,email,password,role) values (150,'patient2@email.com','Patient123',0);
insert into users(id, email, password, role) values (102,'doctor@email.com', 'Doctor123',1);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (1,'doctor@email.com','Doctor','Doctor123','123467711','ACTIVE','Docic','08','16',100,1);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (2,'doctorer@email.com','Doctorer','Doctoruu123','123467911','ACTIVE','Docicii','08','16',100,1);

insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id) values (3,'doctorere@email.com','Doctorer','Doctoruut123','123467111','ACTIVE','Docicii','08','16',101,1);


insert into clinic_administrator(id, email, name, password ,phone,surname, clinic_id) values (1, 'nemanja@email.com', 'Nemanja', 'Mirkela97' ,'123456789', 'Mirkovic', 100);
insert into nurse(id, email, name, password, number, surname, work_hours_from, work_hours_to, clinic_id,address,city,country) values (100,'nurse@email.com', 'Nurse', 'Nurse123','153426010', 'Nursic', '8:00', '16:00', 100,'bolnicka','Novi sad','Srbija');
insert into users(id, email, password, role) values (101, 'nurse@email.com', 'Nurse123', 2);
insert into room(id,kind,label,clinic_id) values (100,'OPERATION','label',101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id) values (100,0,0,0,'OPERATION','AWAITING',100,1,100,100,87,100);
insert into examining(examination_id,doctor_id) values (100,1);
insert into medical_record(id,allergies,blood_type,height,weight,patient_id) values (100,'No allergies','A+',185,90,87);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id) values (103,1,3,1,'OPERATION','AWAITING',101,1,100,100,87,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id) values (104,7,14,8,'OPERATION','AWAITING',100,1,100,100,150,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id) values (105,1,5,7,'OPERATION','AWAITING',101,1,100,100,87,100);
insert into examining(examination_id,doctor_id) values (100,2);
insert into examining(examination_id,doctor_id) values (105,3);
insert into examining(examination_id,doctor_id) values (103,3);

