import React from 'react'
import userImage from '@/assets/images/user.webp'
import { cn } from '@/lib/utils'

const UserImage = ({ className }) => {
    return (
        <div className={cn('w-[38px] h-[38px]', className)}>
            <img className='w-full h-full object-cover rounded-full' src={userImage} width={38} height={38} alt="User Image" />
        </div>
    );
};

export default UserImage;