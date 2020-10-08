package com.pwit.accountservice.repository;

import com.pwit.accountservice.entity.User;
import com.pwit.accountservice.entity.enumeration.AccountType;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findUserByUserId(String userId);

    List<User> findAllByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String firstName,
                                                                                    String lastName);
    List<User> findByAccountTypeEqualsAndDoctorInfoNotNullAndDoctorInfoSpecializationContainingIgnoreCaseOrFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(
            AccountType accountType, String doctorInfo_specialization, String firstName, String lastName);
}
