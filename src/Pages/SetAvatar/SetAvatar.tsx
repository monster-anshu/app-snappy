import React, { useContext } from 'react';
import { Avatar, Container } from './SetAvatarStyle';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Buffer } from 'buffer';
import { Context } from 'Context';
import { setAvatar } from 'Utils/APIRoutes';
import { Loader } from 'Components';
import toast from 'react-hot-toast';
import axios from 'axios';

const SetAvatar = () => {
  const { API, user, userSetter } = useContext(Context);

  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<number>();
  const [avatars, setAvatars] = useState<string[]>([]);
  const [disabled, setDisabled] = useState(false);

  const handleSubmit = () => {
    if (selected === undefined) return toast.error('Please Select A avatar');
    const promise = API?.patch(setAvatar, { avatar: avatars[selected] });
    setDisabled(true);
    promise &&
      toast
        .promise(promise, {
          loading: 'Setting up avatar',
          success: () => {
            user &&
              userSetter?.({
                ...user,
                avatarImage: avatars[selected],
              });
            return 'Avatar set successfully';
          },
          error: (err) => {
            return err.response.data.msg;
          },
        })
        .then(() => navigate('/'))
        .finally(() => setDisabled(false));
  };

  const getAvatars = async () => {
    setLoading(true);
    const values: string[] = [];
    for (let i = 0; i < 4; i++) {
      try {
        const value = Math.round(Math.random() * 10000);
        const url = `https://api.multiavatar.com/${value}.svg`;
        const { data } = await axios.get(url);
        const buffer = Buffer.from(data);
        values.push(buffer.toString('base64'));
      } catch (error) {}
    }
    setAvatars(values);
    setLoading(false);
  };

  useEffect(() => {
    getAvatars();
  }, []);

  return loading ? (
    <Loader text={'Fecthing avtars'} />
  ) : (
    <Container>
      <div className={'title'}>
        <h1>Pick an avatar as your profile picture</h1>
      </div>
      <div className={'avatars'}>
        {avatars.map((avatar, index) => (
          <Avatar isSelected={index === selected} key={index}>
            <img
              src={`data:image/svg+xml;base64,${avatar}`}
              alt={'Avatar'}
              onClick={() => setSelected(index)}
            />
          </Avatar>
        ))}
      </div>

      <button onClick={handleSubmit} disabled={disabled}>
        Set As Profile Picture
      </button>
    </Container>
  );
};

export default SetAvatar;
