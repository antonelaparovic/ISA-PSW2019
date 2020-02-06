package com.dtos;

import com.model.Diagnose;
import com.model.Medicine;

public class CodebookDTO {
    private Medicine lek;
    private Diagnose dijagnoza;

    public CodebookDTO() {}

    public Medicine getMedicine() {
        return lek;
    }
    public void setMedicine(Medicine lek) {
        this.lek = lek;
    }
    public Diagnose getDiagnose() {
        return dijagnoza;
    }
    public void setDiagnose(Diagnose dijagnoza) {
        this.dijagnoza = dijagnoza;
    }


}
