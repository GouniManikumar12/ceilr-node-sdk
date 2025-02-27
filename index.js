const axios = require("axios");

class CeilR {
  constructor(apiKey, customerId) {
    this.apiKey = apiKey;
    this.customerId = customerId;
    this.endpoint = "https://api.ceilr.com";
  }

  async checkFeature(featureName) {
    try {
      const response = await axios.post(`${this.endpoint}/check-feature`, {
        apiKey: this.apiKey,
        customerId: this.customerId,
        featureName,
      });
      return response.data.allowed;
    } catch (error) {
      console.error("CeilR Error:", error);
      return false;
    }
  }

  async trackUsage(featureName, count = 1) {
    try {
      await axios.post(`${this.endpoint}/track-usage`, {
        apiKey: this.apiKey,
        customerId: this.customerId,
        featureName,
        count,
      });
    } catch (error) {
      console.error("CeilR Error:", error);
    }
  }

  async getUserEntitlements() {
    try {
      const response = await axios.get(`${this.endpoint}/user-entitlements`, {
        headers: { Authorization: `Bearer ${this.apiKey}` },
      });
      return response.data.entitlements;
    } catch (error) {
      console.error("CeilR Error:", error);
      return [];
    }
  }
}

module.exports = CeilR;
