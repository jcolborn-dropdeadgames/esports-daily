import React, { Component } from "react";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY {
    posts {
      id
      title
      body
      createdAt
    }
  }
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  margin: 0 auto;
`;

export default class Posts extends Component {
  render() {
    return (
      <>
        <Query query={ALL_POSTS_QUERY}>
          {({ data, error, loading }) => {
            if (loading) return <p>Loading ...</p>;
            if (error) return <p>Error: {error.message}</p>;
            return (
              <PostList>
                {data.posts.map(post => (
                  <p>{post.title}</p>
                ))}
              </PostList>
            );
          }}
        </Query>
      </>
    );
  }
}
