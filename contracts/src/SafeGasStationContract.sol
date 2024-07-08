// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

import "@openzeppelin/contracts/utils/structs/EnumerableSet.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
}

contract SafeGasStationContract is Ownable {
    uint256 constant INSURENCE_CONTRACT_PRICE = 1 ether;
    using EnumerableSet for EnumerableSet.AddressSet;
    address public usdtAddress;

    EnumerableSet.AddressSet private safeWallets;
    mapping(address => mapping(address => uint256)) private allowances;

    // Modificador para verificar se o usuário já é segurado
    modifier isNotInsured(address buyer) {
        require(!safeWallets.contains(msg.sender), "Seguro ja cadastrado");
        _;
    }

    // Modificador para verificar se o usuário já é segurado
    modifier isInsured(address buyer) {
        require(safeWallets.contains(msg.sender), "Seguro ja cadastrado");
        _;
    }

    // Modificador para verificar se o usuário tem saldo suficiente em USDT
    modifier hasSufficientBalance(address buyer) {
        require(IERC20(usdtAddress).balanceOf(buyer) < INSURENCE_CONTRACT_PRICE, "Saldo insuficiente");
        _;
    }


    constructor(address _usdtAddress) Ownable(msg.sender) {
        usdtAddress = _usdtAddress;
    }

    function purchaseSafeGas() public payable hasSufficientBalance(msg.sender) isNotInsured(msg.sender) {
        //require(IERC20(usdtAddress).approve(msg.sender, INSURENCE_CONTRACT_PRICE));   
        IERC20(usdtAddress).transferFrom(msg.sender, address(this), INSURENCE_CONTRACT_PRICE);
        // Marcar o comprador como segurado
        safeWallets.add(msg.sender);
        // Aprovar que o contrato pode gastar os USDT do comprador
    }

    function approveTest() external {
        address teste = msg.sender;
        address contract teste = 0x6B175474E89094C44Da98b954EedeAC495271d0F;
        (bool success, bytes memory data) = delegateCall(abi.encodeWithSignature("approve(address, uint256)", address(this),INSURENCE_CONTRACT_PRICE));        
    }

    function approveSpend(uint256 amount ) public isInsured(msg.sender) {
        IERC20(usdtAddress).approve(address(this), amount);
    }

    function getWalletAllowance() external view returns (bool) {
        require(safeWallets.contains(msg.sender), "Nao e segurado");
        return true;
    }

    function teste() external view returns (address) {
        return address(this);
    }
}