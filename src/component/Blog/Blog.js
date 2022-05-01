import React from 'react';

const Blog = () => {
    return (
        <div className='container p-6'>
            <h1 className='text-2xl py-4'> Difference between javascript and nodejs
            </h1>
            <p className='text-base'>জাভাস্ক্রিপ্ট একটি প্রোগ্রামিং ল্যাংগুয়েজ নোড জাভাস্ক্রিপ্ট এর রানটাইম এনভায়রনমেন্ট

                জাভাস্ক্রিপ্ট সাধারণত ক্লাইন্ট সাইডে ব্যবহার হয় নোড বেশিরভাগ ক্ষেত্রে সার্ভার সাইডে ব্যবহার হয়

                জাভাস্ক্রিপ্ট বেশিরভাগ ইঞ্জিন যেমন স্পাইডার মানকি ভি8, জাভাস্ক্রিপ্ট কোর, এগুলোতে চালানো যায় । নোড শুধুমাত্র ভি8 এ সাপোর্ট করে</p>

            <h1 className='text-2xl p-4'>Differences between sql and nosql databases.</h1>
            <p >spl হল relational database system আর NoSql হলো non relational database system

                Sql এ ফিক্স schemea থাকে কিন্তু nosql এ schema dynamic

                Sql কমপ্লেক্স কোয়ারি এর জন্য ভালো। কিন্তু nosql কমপ্লেক্স কোয়ারির জন্য পারফেক্ট না</p>
            <h1 className='text-2xl p-4'>What is the purpose of jwt and how does it work</h1>
            <p >jwt security বা auth এর জন্য ব্যবহার করা হয়

                যখন ইউজার লগিন করে তখন jwt একটি এনক্রিপ্ট টোকেন জেনারেট করে।
                তারপর ইউজার যখন ক্লাইন্ট সাইডে কাজ করে তখন আরেকটি টোকেন জেনারেট হয়। এই দুই টোকেন ডিক্রিপ্টভ করে মিলে দেখা হয় ইউজার ভ্যালিড কিনা। ভ্যালিড হলে অনুমতি দেওয়া হয় না হলে অনুমতি দেওয়া হয় না</p>
        </div>
    );
};

export default Blog;