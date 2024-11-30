import React from 'react';
import NodeCard from "@/components/elements/NodeCard";

const Page = () => {
    return (
        <div>
            <NodeCard
                content={"java -jar denis.jar"}
            />
        </div>
    );
};

export default Page;