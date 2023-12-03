import { useLoaderData } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import { FaFilter, FaSearch, FaClone } from "react-icons/fa";
import {
  Drawer,
  IconButton,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import Card from "../../Components/Card/Card";
import { useContext, useState } from "react";
import { CategoryContext } from "../../Hook/CategoryProvider";
import { useEffect } from "react";

const Venues = () => {
  const { selectedCategory } = useContext(CategoryContext);

  console.log(selectedCategory);

  //loa data
  const data = useLoaderData();

  //filter data
  const filteredVenue = data.filter(
    (data) => data.category === selectedCategory.toLowerCase()
  );


  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="space-y-5">
      <Navbar></Navbar>

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div>
          <button className="btn" onClick={openDrawer}>
            Filter by <FaFilter></FaFilter>
          </button>
          <Drawer open={open} onClose={closeDrawer} className="p-4">
            <div className="mb-6 flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                Filter by
              </Typography>
              <IconButton
                variant="text"
                color="blue-gray"
                onClick={closeDrawer}
              >
                <FaClone></FaClone>
              </IconButton>
            </div>

            <div className="mb-5">
              <Select variant="outlined" label="filter by budget">
                <Option>100000 - 150000 tk</Option>
                <Option>150000 - 200000 tk</Option>
                <Option>200000 - 250000 tk</Option>
              </Select>
            </div>

            <div>
              <form  className="w-full">
                <select className="select w-full select-ghost ">
                  <option disabled selected value="">
                    filter by area
                  </option>
                  <option>Mirpur</option>
                  <option>Gulshan</option>
                  <option>Dhanmondi</option>
                </select>
              </form>
            </div>
          </Drawer>
        </div>

        <div>
          <div className="w-72">
            <Input label="search by name" icon={<FaSearch></FaSearch>} />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto pb-10">
        {filteredVenue && filteredVenue.map((data) => <Card key={data.id} data={data}></Card>)}
      </div>
    </div>
  );
};

export default Venues;
