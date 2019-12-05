insert into diagnose (id, title, description) values (5, 'Marko', 'Marković');
insert into diagnose(id, title, description) values (6, 'Nikola', 'Nikolic');
insert into clinic(id, address, description, name) values (1, 'Novi sad 123', 'Odlicna', 'MediaGroup');
insert into examination_type(id, label, price, clinic_id) values (1,'Hirurg', '1000', 1);
insert into users(id, email, password, role) values (1,'milos@email.com', 'Milos33',3);
insert into patient(id, insuranceid, address, city, country, email, name, number, password, status, surname) values (87, 1111111111111, 'Adresa', 'Grad', 'Drzava', 'patient@email.com', 'Patient', 147258, 'Patient123', 'APPROVED', 'Patientic');