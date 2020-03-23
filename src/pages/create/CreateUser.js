import React, { useState, useContext } from 'react';
import { Input, Button } from '@wedgekit/core';
import { useHistory } from 'react-router-dom';

import './CreateUser.scss';
import { UserContext } from '../../User';

const CreateUser = () => {
  const [form, setForm] = useState({
    firstName: '',
    username: '',
    email: '',
  });
  const [sending, setSending] = useState(false);
  const user = useContext(UserContext);

  const history = useHistory();

  const createUser = async (e) => {
    e.preventDefault();

    setSending(true);
    await fetch('http://localhost:8080/users', {
      method: 'POST',
      body: JSON.stringify({
        data: {
          type: 'user',
          attributes: form,
        },
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    user.setUser(form);
    setSending(false);
    history.push('/app');
  };

  return (
    <form onSubmit={createUser}>
      <Input
        label="First Name"
        value={form.firstName}
        onChange={(v) => setForm({ ...form, firstName: v })}
        required
        disabled={sending}
      />
      <Input
        label="Username"
        value={form.username}
        onChange={(v) => setForm({ ...form, username: v })}
        required
        disabled={sending}
      />
      <Input
        label="Email"
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
        type="email"
        required
        disabled={sending}
      />
      <Button disabled={sending} domain="primary" type="submit">
        Create
      </Button>
    </form>
  );
};

export default CreateUser;
