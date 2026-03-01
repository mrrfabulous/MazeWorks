import { describe, expect, it } from 'vitest';

import {
  BookingStatus,
  DisputeStatus,
  createBookingSchema,
  providerSearchQuerySchema,
  resolveDisputeSchema
} from '../src';

describe('shared schemas', () => {
  it('validates provider search query', () => {
    const result = providerSearchQuerySchema.safeParse({
      lat: 6.5,
      lng: 3.3,
      category: 'cleaning',
      radiusKm: '15'
    });

    expect(result.success).toBe(true);
    if (!result.success) {
      return;
    }

    expect(result.data.radiusKm).toBe(15);
  });

  it('validates booking creation payload', () => {
    const result = createBookingSchema.safeParse({
      providerId: 'prov_1',
      category: 'cleaning',
      scheduledAt: new Date().toISOString(),
      address: '221B Baker Street',
      amountMinor: 2500,
      currency: 'USD'
    });

    expect(result.success).toBe(true);
  });

  it('allows only final dispute resolutions', () => {
    const blocked = resolveDisputeSchema.safeParse({
      disputeId: 'dispute_1',
      resolution: DisputeStatus.OPEN
    });
    const allowed = resolveDisputeSchema.safeParse({
      disputeId: 'dispute_1',
      resolution: DisputeStatus.RESOLVED_RELEASE_PROVIDER
    });

    expect(blocked.success).toBe(false);
    expect(allowed.success).toBe(true);
  });

  it('keeps booking enum values stable', () => {
    expect(BookingStatus.REQUESTED).toBe('REQUESTED');
    expect(BookingStatus.COMPLETED).toBe('COMPLETED');
  });
});
