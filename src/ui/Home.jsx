import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';
import { useEffect, useState } from 'react';
import { getMenu } from '../services/menuService';
function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="">
      <div className=" bac my-10 px-4 text-center sm:my-16 ">
        <h1 className="mb-8  text-xl font-semibold md:text-3xl ">
          The best pizza in Town
          <br />
          <span className="text-yellow-500">
            Straight out of the oven, straight to you.
          </span>
        </h1>
        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue ordering, {username}
          </Button>
        )}
      </div>
    </div>
  );
}

export default Home;
