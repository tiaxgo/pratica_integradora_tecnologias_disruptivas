package com.projeto.integrado.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.projeto.integrado.entity.User;

public interface UserRepository extends JpaRepository<User, Integer> {
    Optional<User> findByUserEmail(String email);
    
    List<User> findByNome(String nome);
    
    List<User> findByNomeContaining(String substring);
    
    List<User> findByAtivoTrue();
    
    Optional<User> findByUserEmailAndAtivo(String email, boolean ativo);
}
