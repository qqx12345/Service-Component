import { useQuery } from "@tanstack/react-query";
import { fetchdata,fetchdatabyId } from "./request";
import { useState } from "react";
import '../output.css'
import PropTypes from 'prop-types';
export default function Index() {
    Detail.propTypes = {
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    };
  
    function Detail({ id }) {
      const { data: question, isLoading, error } = useQuery({
        queryKey: ['questions', id],
        queryFn: ({ queryKey }) => fetchdatabyId(queryKey[1]),
      });
  
      if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
      if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;
  
      return (
        <div className="bg-white shadow-md rounded-lg p-6">
          <button
            onClick={() => {
              setid(0);
            }}
            className="mb-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition duration-200"
          >
            <span>Back</span>
          </button>
          <ul className="space-y-4">
            <li><h2 className="text-xl font-bold text-gray-800">{question.title}</h2></li>
            <li><p className="text-gray-700">{question.detail}</p></li>
            <li><span className="text-sm text-gray-500">Author: {question.author}</span></li>
          </ul>
        </div>
      );
    }
  
    const [id, setid] = useState(0);
    const { data: questions, isLoading, error } = useQuery({
      queryKey: ['questions'],
      queryFn: fetchdata,
    });
  
    if (isLoading) return <p className="text-center text-gray-600">Loading...</p>;
    if (error) return <p className="text-center text-red-600">Error: {error.message}</p>;
  
    return (
      <div className="max-w-4xl mx-auto p-4">
        <ul className="divide-y divide-gray-200">
          {id === 0
            ? questions.map((question) => (
              <li
                key={question.id}
                className="flex justify-between gap-x-6 py-5 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-200 p-4"
              >
                <div className="flex items-center gap-x-4 w-full">
                  <p
                    className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-blue-500 transition"
                    onClick={() => {
                      setid(question.id);
                    }}
                  >
                    {question.title}
                  </p>
                </div>
              </li>
            ))
            : <Detail id={id} />
          }
        </ul>
      </div>
    );
  }
  
