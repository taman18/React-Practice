"use client";
import {
  CountrySliceState,
  UniversityData,
} from "@/interface/countryData.type";
import { Pagination, Stack } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCountryData } from "@/store/slice/countrySlice";


const TableListing: React.FC = () => {
  const dispatch = useDispatch();
  const [pageNumber, setPageNumber] = useState(1);
  const [limit, setLimit] = useState(10);
  const countrySelector = useSelector(
    (state: CountrySliceState) => state.countrySlice.selectedCountryName
  );
  const API_URL = `http://universities.hipolabs.com/search?name=${countrySelector}&offset=${pageNumber}&limit=${limit}`;
  let [countryData, setCountryData] = useState<UniversityData[]>([]);
  
  const getCountryData = async () => {
    try {
      const { data } = await axios.get(API_URL);
      setCountryData(data);
    }
    catch(err) {
      console.log(err);
    }
  };
  
  const updatePageNumber = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPageNumber(value);
  };

  useEffect(() => {
    const getData = setTimeout(() => {
      getCountryData();
    }, 500);
    return () => clearTimeout(getData);
  }, [limit]);

  useEffect(() => {
    getCountryData();
  }, [countrySelector, pageNumber]);

  return (
    <div className="max-w-6xl mx-auto py-8 max-h-[500px] overflow-auto	">
      <table className="table-auto border-collapse w-full shadow-lg bg-white text-sm">
        <thead className="bg-gray-200 text-gray-600 uppercase text-xs font-semibold">
          <tr>
            <th className="border px-4 py-2">Country Code</th>
            <th className="border px-4 py-2">Country Name</th>
            <th className="border px-4 py-2">State Name</th>
            <th className="border px-4 py-2">Website Link</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {countryData.length ? (
            countryData.map((item: UniversityData, index: number) => (
              <tr
                key={index}
                className="hover:bg-gray-100 transition-colors duration-200"
              >
                <td className="border px-4 py-2">{item.alpha_two_code || "-"}</td>
                <td className="border px-4 py-2">{item.country || "-"}</td>
                <td className="border px-4 py-2">{item["state-province"] || "-"}</td>
                <td className="border px-4 py-2">
                  <a
                    href={item.web_pages[0]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {item.web_pages[0] || "-"}
                  </a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center py-4 text-red-500">
                No Data Found
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <section className="flex w-[1160px] items-center justify-between mt-8 fixed top-[590px]">
        <div>
          <h2 className="text-lg font-medium">Set Limit</h2>
          <input
            type="number"
            onChange={(event) => setLimit(Number(event?.target.value))}
            defaultValue={10}
            min={1}
            max={20}
            className="border px-2 py-1 w-[60px] text-center"
          />
        </div>

        {!!countryData.length && (
          <Stack spacing={2}>
            <Pagination
              count={10}
              color="primary"
              onChange={(event, value) => updatePageNumber(event, value)}
            />
          </Stack>
        )}
      </section>
    </div>
  );
};

export default TableListing;
