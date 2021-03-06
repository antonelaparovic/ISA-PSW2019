insert into diagnose(id, title, description) values (100, 'Pregled 1', 'Opis 1');
insert into diagnose(id, title, description) values (101, 'Pregled 2', 'Opis 2');

insert into clinic(id, address, description, name,clinic_rating) values (100, 'Novi sad 123', 'Odlicna', 'MediaGroup',4.4);
insert into clinic(id,address,description,name,clinic_rating) values (101,'Sabac 2','Super','Dom zdravlja',3.4);

insert into examination_type(id, label, price, clinic_id) values (100,'Pregled ociju', '3000', 100);
insert into examination_type(id, label, price, clinic_id) values (1,'Vadjenje krvi', '700', 100);
insert into examination_type(id, label, price, clinic_id) values (2,'Pregled', '1000', 101);
insert into examination_type(id, label, price, clinic_id) values (3,'Pregled koze', '1500', 101);


insert into users(id, email, password, role) values (100,'patienttim27@gmail.com', 'Patient123',0);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (87, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patienttim27@gmail.com', 'Patient', 147258589, 'Patient123', 'APPROVED', 'Patientic');
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (150, 1111111111112, 'Adreea', 'Grade', 'Drzava', 'patient2@email.com', 'Patienter', 147258581, 'Patient123', 'AWAITING_APPROVAL', 'Patienticer');

insert into users(id,email,password,role) values (150,'patient2@email.com','Patient123',0);
insert into users(id, email, password, role) values (102,'doctor@email.com', 'Doctor123',1);
insert into users(id, email, password, role) values (103,'doctorer@email.com', 'Doctoruu123',1);
insert into users(id, email, password, role) values (104,'doctorere@email.com', 'Doctoruut123',1);

insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id,doctor_rating) values (1,'doctor@email.com','Doctor','Doctor123','123467711','ACTIVE','Docic','08','16',100,100,6.7);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id,doctor_rating) values (2,'doctorer@email.com','Doctorer','Doctoruu123','123467911','ACTIVE','Docicii','08','16',100,1,5.4);
insert into doctor(id, email, name, password, phone, status, surname, work_hours_from, work_hours_to,clinic_id, specialized_id,doctor_rating) values (3,'doctorere@email.com','Doctorer','Doctoruut123','123467111','ACTIVE','Docicii','08','16',101,2,3.1);


insert into users(id, email, password, role) values (171, 'cadmin@email.com', 'Cadmin123', 4);

insert into clinic_administrator(id, email, name, password ,number,surname, clinic_id) values (1, 'cadmin@email.com', 'CAdmin', 'Cadmin123' ,'123456789', 'CAdminic', 100);

insert into nurse(id, email, name, password, number, surname, work_hours_from, work_hours_to, clinic_id,address,city,country) values (100,'nurse@email.com', 'Nurse', 'Nurse123','153426010', 'Nursic', '8:00', '16:00', 100,'bolnicka','Novi sad','Srbija');
insert into nurse(id, email, name, password, number, surname, work_hours_from, work_hours_to, clinic_id,address,city,country) values (101,'nurseee@email.com', 'Nursee', 'Nurse12345','153426510', 'Nursic', '8:00', '16:00', 101,'sabacka','Sabac','Srbija');
insert into nurse(id, email, name, password, number, surname, work_hours_from, work_hours_to, clinic_id,address,city,country) values (102,'nurse015@email.com', 'Nursere', 'N12345678','153426710', 'Nursic', '8:00', '16:00', 100,'radnicka','Sabac','Srbija');


insert into users(id, email, password, role) values (101, 'nurse@email.com', 'Nurse123', 2);
insert into users(id, email, password, role) values (120, 'nurseee@email.com', 'Nurse12345', 2);
insert into users(id, email, password, role) values (130, 'nurse015@email.com', 'N12345678', 2);


insert into room(id,kind,label,clinic_id) values (100,'OPERATION','R1',101);
insert into room(id,kind,label,clinic_id) values (101,'EXAMINATION','R2',101);
insert into room(id,kind,label,clinic_id) values (102,'OPERATION','R3',100);
insert into room(id,kind,label,clinic_id) values (103,'EXAMINATION','R4',100);


insert into interval(id,end_time,start_time) values (164, '2020.02.03 10:00', '2020.02.03 09:00');
insert into interval(id,end_time,start_time) values (165, '2020.02.01 13:00', '2020.02.01 12:00');
insert into interval(id,end_time,start_time) values (166, '2020.02.17 14:00', '2020.02.17 13:00');
insert into interval(id,end_time,start_time) values (167, '2020.02.13 09:00', '2020.02.13 08:00');

insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id,interval_id) values (100,0,0,0,'OPERATION','AWAITING',100,1,100,100,87,102,164);
insert into examining(examination_id,doctor_id) values (100,1);
insert into medical_record(id,allergies,blood_type,height,weight,patient_id) values (100,'No allergies','A+',185,90,87);


insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id,interval_id) values (103,1,3,1,'OPERATION','AWAITING',101,1,2,100,87,100,165);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id,interval_id) values (104,7,14,8,'EXAMINATION','AWAITING',100,1,100,100,87,102,166);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,nurse_id,patient_id,room_id,interval_id) values (105,1,5,7,'OPERATION','AWAITING',101,1,3,100,87,100,167);
insert into examining(examination_id,doctor_id) values (100,3);
insert into examining(examination_id,doctor_id) values (105,1);
insert into examining(examination_id,doctor_id) values (103,3);

insert into clinical_center_administrator(id,email,name,number,password,surname) values (111,'ccadmin@email.com','Pera',  '2020202', 'CCadmin123', 'Peric');
insert into users(id, email, password, role) values (111,'ccadmin@email.com', 'CCadmin123',3);

insert into medicine(id, chemical_composition, label, usage) values (1231, 'nnnneeesto', 'Brufen', 'uvek');
insert into medicine(id, chemical_composition, label, usage) values (2222, 'opiis', 'Bromazepan', 'smirenje');
insert into codebook(id) values ('333555');


insert into interval(id,end_time,start_time) values (150, '2020.02.20 10:00', '2020.02.20 09:00');
insert into interval(id,end_time,start_time) values (151, '2020.01.21 12:00', '2020.02.20 11:00');
insert into interval(id,end_time,start_time) values (152, '2020.02.21 14:00', '2020.02.21 13:00');
insert into interval(id,end_time,start_time) values (153, '2020.02.21 09:00', '2020.02.21 08:00');
insert into interval(id,end_time,start_time) values (154, '2020.02.22 11:00', '2020.02.22 10:00');
insert into interval(id,end_time,start_time) values (155, '2020.02.06 10:00', '2020.02.06 09:00');
insert into interval(id,end_time,start_time) values (156, '2020.02.27 10:00', '2020.02.27 09:00');
insert into interval(id,end_time,start_time) values (160, '2020.02.27 13:00', '2020.02.27 12:00');
insert into interval(id,end_time,start_time) values (161, '2020.02.28 16:00', '2020.02.28 15:00');
insert into interval(id,end_time,start_time) values (162, '2020.02.28 11:00', '2020.02.28 10:00');

insert into interval(id,end_time,start_time) values (163, '2020.02.28 09:00', '2020.02.28 08:00');




insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (200,4,20,5,'OPERATION','PREDEF_AVAILABLE',100,1,100,150,100,102);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (201,4,10,5,'EXAMINATION','PREDEF_AVAILABLE',100,1,1,152,100,103);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (202,4,15,5,'OPERATION','PREDEF_AVAILABLE',101,1,2,153,101,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (203,4,30,5,'EXAMINATION','PREDEF_AVAILABLE',101,1,2,154,101,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (204,4,15,5,'OPERATION','PREDEF_AVAILABLE',101,1,2,156,101,100);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (205,4,10,5,'EXAMINATION','PREDEF_AVAILABLE',101,1,2,160,101,101);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (206,4,25,5,'OPERATION','PREDEF_AVAILABLE',100,1,100,161,102,102);
insert into examination(id,clinic_rating,discount,doctor_rating,kind,status,clinic_id,clinic_administrator_id,examination_type_id,interval_id,nurse_id,room_id) values (207,4,30,5,'EXAMINATION','PREDEF_AVAILABLE',100,1,1,162,102,103);

insert into examining(examination_id,doctor_id) values (200,1);
insert into examining(examination_id,doctor_id) values (201,2);
insert into examining(examination_id,doctor_id) values (202,3);
insert into examining(examination_id,doctor_id) values (203,3);
insert into examining(examination_id,doctor_id) values (204,3);
insert into examining(examination_id,doctor_id) values (205,3);
insert into examining(examination_id,doctor_id) values (206,1);
insert into examining(examination_id,doctor_id) values (207,2);


insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (100,'Zavrsen pregled','01.01.2020. 12:30', 100, 1, 200,100);
insert into examination_report(id,comment, time_created, diagnose_id, doctor_id, examination_id, medical_record_id) values (101,'Izvestaj 2','02.01.2020. 08:30', 101, 2, 201,100);


