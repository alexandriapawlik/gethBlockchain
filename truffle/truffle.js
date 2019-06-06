module.exports = 
{
	rpc: 
	{
		host:"localhost",
		port:8543
	},
	networks: 
	{
		development: 
		{
			host: "localhost", //our network is running on localhost
			port: 8543, // port where your blockchain is running
			network_id: "*",
			from: "0x1bd2a3d5a917d305e37375e4b42df41c76a27bc3", // use the account-id generated during the setup process
			gas: 20000000
		}
	}
};