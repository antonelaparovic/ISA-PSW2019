insert into diagnose (id, title, description) values (100, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (101, 'Nikola', 'Nikolic');
insert into clinic(id, address, description, name) values (100, 'Novi sad 123', 'Odlicna', 'MediaGroup');
insert into clinic(id,address,description,name) values (101,'Sabac 2','Super','Dom zdravlja');
insert into examination_type(id, label, price, clinic_id) values (100,'Hirurg', '1000', 100);
insert into users(id, email, password, role) values (100,'patient@email.com', 'Patient123',0);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (87, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patient@email.com', 'Patient', 147258, 'Patient123', 'APPROVED', 'Patientic');
