import React from 'react';
import './Blog.css'
import useTitle from '../../hooks/useTitle';

const Blog = () => {
  useTitle('Blog')
    return (
        <div className='question-container mt-5'>
        <h1 className='p-7 text-center text-5xl'>Blog Questions</h1>
      <div className='question py-5'>
        <h4 className='font-bold text-2xl'>Question 1: What is an access token and refresh token? How do they work and where should we store them on the client-side??</h4>
        <p><span className='font-bold'>Answer:</span> <br />
        <p className='font-semibold'>Access Token: An access token is a credential that is issued to a user or an application after successful authentication. 
        It is used to gain access to protected resources, such as APIs or web services. 
        Access tokens are typically short-lived and have an expiration time. <br />

        Refresh Token: A refresh token is a long-lived credential that is also issued during the authentication process. Unlike an access token, 
        a refresh token is used to obtain a new access token when the current one expires. 
        It allows the user or application to request a fresh access token without going through the entire authentication process again. <br /> <br />

        The workflow typically involves the following steps: <br />
        1. Authentication: The user or application authenticates itself using credentials (e.g., username/password) or 
        through an external authentication provider (e.g., OAuth). <br />
        
        2.Token Issuance: Upon successful authentication, the server generates an access token and a refresh token. The access token is typically included in the response to the authentication request,
        while the refresh token is securely stored on the server. <br /> <br />

        Regarding storage on the client-side, it is generally recommended to store tokens securely to prevent unauthorized access. 
        Here are some options for token storage:
        
        * HTTP-only Cookies: Access tokens can be stored as HTTP-only cookies. 
        These cookies are not accessible by JavaScript, reducing the risk of cross-site scripting (XSS) attacks. However, 
        cookies have limitations, and they may not be suitable for certain client-side applications (e.g., mobile apps).
        </p>
        </p>  
      </div>
      <div className='question py-5'>
        <h4 className='font-bold text-2xl'>Question 2: Compare SQL and NoSQL databases??</h4>
        <p><span className='font-bold'>Answer:</span> <br />
         <p className='font-semibold'> SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different types of database management systems that have 
          distinct characteristics and are suited for different use cases. Here's a comparison between SQL and NoSQL databases: <br />

          1. Data Model:
          SQL: SQL databases use a structured data model based on tables with rows and columns. The data is organized into predefined schemas, and relationships between tables are established through primary and foreign keys
          NoSQL: NoSQL databases use various data models such as key-value, document, columnar, or graph. They provide flexibility in storing unstructured or semi-structured data without rigid schemas or predefined relationships <br />
          2. Schema:
          SQL: SQL databases enforce a rigid schema where the structure of the data is predefined and needs to be defined upfront. Any changes to the schema often require altering the tables and migrating data
          NoSQL: NoSQL databases are schema-less or have a flexible schema. They allow for dynamic and evolving data structures, enabling easier adaptation to changing requirements <br />
          3. Scalability:
          SQL: SQL databases generally scale vertically, meaning they require more powerful hardware as the data and workload grow. Scaling horizontally (adding more servers) can be complex and may require partitioning the data
          NoSQL: NoSQL databases are designed for horizontal scalability. They can distribute data across multiple servers, allowing for seamless scaling by adding more nodes to the database cluster.
         <br />
        </p> 
        </p>
      </div>
      <div className='question py-5'>
        <h4 className='font-bold text-2xl'>Question 3: What is express js? What is Nest JS?</h4>
        <p><span className='font-bold'>Answer:</span> <br />
        <p className='font-semibold'>
         Express.js is a fast and minimalist web application framework for Node.js. 
         It provides a simple and flexible way to build web applications and APIs by providing a set of robust features and middleware. <br />
         Key features of Express.js include: <br />

         1. Routing: Express.js allows you to define routes to handle HTTP requests for different URLs and HTTP methods. It provides an easy way to handle requests for specific routes and execute corresponding code or logic. <br />
         2. Middleware: Express.js utilizes middleware functions that can be used to modify the request and response objects or execute additional logic before passing the control to the next middleware or route handler. Middleware functions can handle tasks such as logging, authentication, error handling, and more. <br />
        <br />
        NestJS, on the other hand, is a full-featured, progressive Node.js framework for building scalable and maintainable server-side applications. It is built with TypeScript and heavily inspired by Angular's architecture and concepts.  <br />
        Key features of NestJS include: <br />
        1. Modular Architecture: NestJS promotes a modular structure, allowing developers to divide their application into reusable and self-contained modules. Modules encapsulate related functionality, making the application more maintainable and testable. <br />
        2. Dependency Injection: NestJS leverages dependency injection, making it easy to manage and inject dependencies into classes or components. This helps in writing loosely coupled and highly testable code. <br />
        </p>
        </p> 
      </div>
      <div className='question py-5'>
        <h4 className='font-bold text-2xl'>Question 4: What is MongoDB aggregate and how does it work?</h4>
        <p><span className='font-bold'>Answer:</span> <br />
         <p className='font-semibold'>
         In MongoDB, the aggregate method is a powerful tool that allows you to perform advanced data processing and analysis operations on collections. It enables you to perform complex data manipulations, transformations, aggregations, and computations within the database. <br />

         1. Data Input: The aggregate method takes the input collection as its source data. <br />
         2. Pipeline Stages: The aggregate pipeline consists of one or more stages, each specifying an operation or transformation. Some commonly used stages include:
         $match: Filters the documents based on specific criteria <br />
         $group: Groups the documents based on specified fields and applies aggregation operations like sum, average, count, etc. within each group <br />
         $project: Reshapes the documents by including or excluding specific fields or computing new fields <br />
         $sort: Sorts the documents based on specified fields <br />
         $limit: Limits the number of documents in the result set <br />
         $skip: Skips a specified number of documents in the result set. <br />
         
         3. Execution: The aggregate method executes the pipeline stages in the specified order, passing the results from one stage to the next. Each stage processes the documents based on its operation or transformation and produces intermediate results. <br /> <br />
         </p>
        </p> 
      </div>
    </div>
    );
};

export default Blog;