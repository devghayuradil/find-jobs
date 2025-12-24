import React from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { ArrowDownIcon } from '../icons/icons';

const GlobalDropdown = ({ items, label = "click me", onSelect }) => (
    <Dropdown menu={{
        items: items.map(item => ({
            ...item,
            onClick: () => onSelect(item),
        })),
    }} trigger={['click']}>
        <button className='w-full flex-between text-dark-300 paragraph-medium' onClick={e => e.preventDefault()}>
            {label}
            <ArrowDownIcon className="w-2 opacity-80" />
        </button>
    </Dropdown>
);
export default GlobalDropdown;