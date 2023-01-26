import { useState } from 'react';
import { supabase } from 'utils/supabaseClient';
import { useMutation } from 'react-query';

export const useMutateAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  /**
   * useMutationの使い方
   *  const 〇〇〇〇Mutation = useMutaion(データ更新関数, オプション);
   */

  const loginMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw new Error(error.message);
    },
    {
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  const registerMutation = useMutation(
    async () => {
      const { error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw new Error(error.message);
    },
    {
      onError: (err: any) => {
        alert(err.message);
        reset();
      },
    }
  );

  return {
    email,
    setEmail,
    password,
    setPassword,
    loginMutation,
    registerMutation,
  };
};
