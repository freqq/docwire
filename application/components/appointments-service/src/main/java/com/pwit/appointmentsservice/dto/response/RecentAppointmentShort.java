package com.pwit.appointmentsservice.dto.response;

import com.pwit.appointmentsservice.dto.enumeration.AppointmentState;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
public class RecentAppointmentShort {
    @NotNull
    private String id;

    @NotNull
    private String doctorId;

    @NotNull
    private String patientId;

    @NotNull
    private AppointmentState appointmentState;

    @NotNull
    private LocalDateTime appointmentDate;
}
