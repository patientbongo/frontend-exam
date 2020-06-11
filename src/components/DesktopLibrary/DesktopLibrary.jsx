import { BlogPost } from "./BlogPost";
import React from "react";
import { mockData } from "./mockData";
import { styles } from "./DesktopLibrary.styles";

export const DesktopLibrary = () => {
  return (
    <div style={styles.parent}>
      {mockData.map((blogPost) => {
        return (
          <BlogPost
            image={blogPost.image}
            author={blogPost.author}
            title={blogPost.title}
            stats={blogPost.stats}
            workouts={blogPost.workouts}
            detailsLink={blogPost.detailsLink}
            key={blogPost.id}
          />
        );
      })}
    </div>
  );
};
