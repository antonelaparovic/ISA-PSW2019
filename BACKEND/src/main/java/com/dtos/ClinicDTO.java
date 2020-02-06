package com.dtos;

public class ClinicDTO {

        private String name;
        private String address;
        private String description;
        private double clinicRating;


        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getAddress() {
            return address;
        }

        public void setAddress(String address) {
            this.address = address;
        }

        public String getDescription() {
            return description;
        }

        public void setDescription(String description) {
            this.description = description;
        }

    public double getClinicRating() {
        return clinicRating;
    }

    public void setClinicRating(double clinicRating) {
        this.clinicRating = clinicRating;
    }
}
