// ini sisinya logic dari user-repository

import { UserRepository } from "./7.user-repository";

export class UserServices {
  constructor(userRepository) {
    if (userRepository) {
      // jadi kalo sudah ada maka akan langsung diset
      this.userRepository = userRepository;
    } else {
      // jika belum ada maka kita buat instance baru
      this.userRepository = new UserRepository();
    }
  }

  save(user) {
    return this.userRepository.save(user);
  }

  findById(id) {
    return this.userRepository.findById(id);
  }

  findAll() {
    return this.userRepository.findAll();
  }
}

// jadi sebenarnya class UserServices ini itu dia manggil class UserRepository
