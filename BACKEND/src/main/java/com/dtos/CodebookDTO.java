package com.dtos;

import com.model.Diagnose;
import com.model.Diagnose;
import com.model.Medicine;
import com.model.Codebook;

public class CodebookDTO {

    private Medicine medicine;
    private Diagnose diagnose;

    public CodebookDTO() {}

    public Medicine getMedicine() {
        return medicine;
    }
    public void setMedicine(Medicine medicine) {
        this.medicine = medicine;
    }
    public Diagnose getDiagnose() {
        return diagnose;
    }
    public void setDiagnose(Diagnose diagnose) {
        this.diagnose = diagnose;
    }



}
