pragma solidity ^0.4.11;

contract Owned{
  address owner;

  function Owned() public {
    owner = msg.sender;
  }

  modifier onlyOwner{
    if (msg.sender != owner){
        revert();
    }
    _;
  }

  function getOwner() public constant returns (address) {
    return owner;
  }

  function changeOwner(address _newOwner) public onlyOwner {
    owner = _newOwner;
  }
}
