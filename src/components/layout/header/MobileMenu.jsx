import GlobalDrawer from '@/components/ui/GlobalDrawer';
import React, { useState } from 'react'
import Nav from './Nav';
import { MenuUnfoldOutlined } from '@ant-design/icons';
import GlobalButton from '@/components/ui/GlobalButton';
import { SearchIcon } from '@/components/icons/icons';
import { Input } from 'antd';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <button onClick={showDrawer}>
                <MenuUnfoldOutlined className='text-2xl' />
            </button>
            <GlobalDrawer title="Find Jobs" open={open} onClose={onClose}>
                <div className='mb-6'>
                    <Nav />
                </div>
                <div className='mb-4'>
                    <Input
                        className="bg-accent-200 rounded-none border-none hover:bg-accent-200 px-5 py-[10px]"
                        size="large"
                        placeholder="large size"
                        prefix={<SearchIcon className="mr-4" />}
                    />
                </div>
                <div>
                    <GlobalButton className="w-full">Resume Builder</GlobalButton>
                </div>

            </GlobalDrawer>
        </>
    )
}

export default MobileMenu