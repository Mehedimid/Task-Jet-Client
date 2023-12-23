import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import useAuth from './useAuth';

function useTodos(props) {
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();

    const {
      refetch,
      isPending,
      data: todos = [],
    } = useQuery({
      queryKey: ["todos", user?.email],
      queryFn: async () => {
        const res = await axiosPublic.get("/tasks");
        return res.data;
      },
    });

    return {todos, isPending, refetch}
}

export default useTodos;