// src/App.jsx
import React, { useState } from "react";
import InputField from "./components/InputField";
import SelectBox from "./components/SelectBox";
import Button from "./components/Button";
import { toast } from "react-toastify";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [selectedAgents, setSelectedAgents] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!username || !password || selectedAgents.length === 0) {
      toast.error("Please fill all fields and select at least one agent!");
      return;
    }

    setLoading(true);

    // Demo: simulate API call
    setTimeout(() => {
      toast.success("AI Team run triggered successfully!");
      console.log("Form Submitted:", { username, password, selectedAgents });
      setLoading(false);
    }, 1000);
  };

  const agentOptions = [
    { label: "Product Manager", value: "pm" },
    { label: "Architect", value: "architect" },
    { label: "Backend Developer", value: "backend" },
    { label: "QA", value: "qa" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-8">
      <h1 className="text-3xl font-bold underline bg-green-950 text-white p-4 mb-6">
        AI Team Demo Form
      </h1>

      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <InputField
          title="Username"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />

        <InputField
          title="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />

        <SelectBox
          title="Assign Agents"
          options={agentOptions}
          value={selectedAgents}
          onChange={setSelectedAgents}
          isMulti
        />

        <Button
          onClick={handleSubmit}
          isLoading={loading}
          variant="primary"
          className="mt-4 w-full"
        >
          Run AI Team
        </Button>
      </div>
    </div>
  );
};

export default App;