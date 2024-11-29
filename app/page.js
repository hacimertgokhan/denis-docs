"use client";

import React from 'react';

const Page = () => {
    return (
        <div className={"p-4"}>
            <section>
                <h2 className={"text-2xl font-bold"}>Overview</h2>
                <p>
                    Denis Database (DDB) is a powerful and lightweight Java library built on Redis logic. It simplifies
                    data storage and manipulation through efficient caching mechanisms and an intuitive structure,
                    making it ideal for managing temporary data.
                </p>
                <br/>
                <h2 className={"text-2xl font-bold"}>Key Features</h2>
                <ul>
                    <li><strong>Simple and Efficient:</strong> Perform CRUD operations effortlessly with easy-to-use
                        methods.
                    </li>
                    <li><strong>Flexible Data
                        Structures:</strong> Handle <code>String</code>, <code>List&lt;String&gt;</code>, and combined
                        mappings seamlessly.
                    </li>
                    <li><strong>Parallel Operations:</strong> Built on <code>ConcurrentHashMap</code> for thread-safe
                        and high-performance tasks.
                    </li>
                    <li><strong>Action-Based Categorization:</strong> Organize data with statuses for streamlined
                        development workflows.
                    </li>
                </ul>
                <br/>
                <h2 className={"text-2xl font-bold"}>Why Choose Denis Database?</h2>
                <p>
                    Denis Database empowers developers to efficiently manage temporary and structured data. Whether
                    handling hierarchical data models, simple mappings, or parallel operations, it ensures speed and
                    simplicity without compromising structure or performance.
                </p>
                <p><strong>Start exploring Denis Database today and enhance your application!</strong></p>
            </section>
        </div>
    );
};

export default Page;